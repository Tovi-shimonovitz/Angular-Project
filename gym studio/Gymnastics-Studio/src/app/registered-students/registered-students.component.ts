import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';
import { RegistrantService, Registrant } from '../registrant.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registered-students',
  standalone: true,
  imports: [CommonModule, AgGridAngular, FormsModule],
  templateUrl: './registered-students.component.html',
  styleUrl: './registered-students.component.css'
})
export class RegisteredStudentsComponent implements OnInit {
  registrants: Registrant[] = [];
  selectedRegistrant: Registrant | null = null;
  isModalOpen = false;
  isAddModalOpen = false;
  newRegistrant: Registrant = {
    firstName: '',
    lastName: '',
    phone: '',
    idNumber: '',
    class: '',
    price: 0,
    isPaid: false
  };
  context = { componentParent: this };
  classes = [
    { name: 'התעמלות קלאסית', price: 450 },
    { name: 'התעמלות אמנותית', price: 500 },
    { name: 'התעמלות ילדים', price: 400 }
  ];
  selectedClass: any = null;

  columnDefs: ColDef[] = [
    {
      headerName: 'פרטים',
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.textContent = 'פרטים';
        button.className = 'details-button';
        button.style.width = '100%';
        button.style.height = '32px';
        button.style.background = '#6366f1';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.fontSize = '12px';
        button.style.fontWeight = '600';
        button.style.cursor = 'pointer';
        button.style.transition = 'background-color 0.2s';
        button.addEventListener('click', () => {
          this.onDetailsClick(params.data);
        });
        button.addEventListener('mouseenter', () => {
          button.style.background = '#4f46e5';
        });
        button.addEventListener('mouseleave', () => {
          button.style.background = '#6366f1';
        });
        return button;
      },
      width: 90,
      sortable: false
    },
    {
      field: 'isPaid',
      headerName: 'האם שולם',
      cellRenderer: (params: any) => params.value ? 'כן' : 'לא',
      filter: 'agSetColumnFilter',
      width: 120,
      minWidth: 110
    },
    {
      field: 'price',
      headerName: 'מחיר',
      filter: 'agNumberColumnFilter',
      width: 110,
      minWidth: 100
    },
    {
      field: 'class',
      headerName: 'שיעור',
      filter: 'agTextColumnFilter',
      width: 220,
      minWidth: 180
    },
    {
      field: 'idNumber',
      headerName: 'מספר זהות',
      filter: 'agTextColumnFilter',
      width: 170,
      minWidth: 150
    },
    {
      field: 'phone',
      headerName: 'טלפון',
      filter: 'agTextColumnFilter',
      width: 180,
      minWidth: 150
    },
    {
      field: 'lastName',
      headerName: 'משפחה',
      filter: 'agTextColumnFilter',
      width: 160,
      minWidth: 140
    },
    {
      field: 'firstName',
      headerName: 'שם',
      filter: 'agTextColumnFilter',
      width: 160,
      minWidth: 140
    }
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      floatingFilter: true
    },
    rowClassRules: {
      'unpaid-row': (params: any) => params.data?.isPaid === false
    }

  };

  constructor(private registrantService: RegistrantService,
    private cdr: ChangeDetectorRef) { }



  ngOnInit(): void {
    this.registrants = this.registrantService.getRegistrants();
  }
  gridApi: any;
  onGridReady(params: any) {
    this.gridApi = params.api;
  }
  onDetailsClick(registrant: Registrant): void {
    console.log('clicked:', registrant);
    this.selectedRegistrant = registrant;
    this.isModalOpen = true;
    this.cdr.detectChanges();
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedRegistrant = null;
  }
  openAddModal(): void {
    this.isAddModalOpen = true;
  }

  closeAddModal(): void {
    this.isAddModalOpen = false;

    this.newRegistrant = {
      firstName: '',
      lastName: '',
      phone: '',
      idNumber: '',
      class: '',
      price: 0,
      isPaid: false
    };
  }
  
 addNewRegistrant(): void {
  this.registrantService.addRegistrant({ ...this.newRegistrant });

  this.closeAddModal();

  this.gridApi.setRowData(this.registrantService.getRegistrants());
}
onClassChange(): void {
  if (!this.selectedClass) return;

  this.newRegistrant.class = this.selectedClass.name;
  this.newRegistrant.price = this.selectedClass.price;
}
}




