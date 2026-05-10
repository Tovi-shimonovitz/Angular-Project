import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userRole = localStorage.getItem('userRole');

  if (!userRole) {
    // אם אין תפקיד, מפנה ללוגין
    router.navigate(['/login']);
    return false;
  }

  const requiredRoles = route.data?.['roles'] as string[];
  if (requiredRoles && !requiredRoles.includes(userRole)) {
    // אם התפקיד לא מורשה, מפנה ללוגין או לדף אחר
    router.navigate(['/login']);
    return false;
  }

  return true;
};
