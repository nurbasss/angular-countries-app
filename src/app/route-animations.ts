import { 
    animate, 
    group, 
    query, 
    style, 
    transition, 
    trigger,
  } from "@angular/animations";

export const slider = 
    trigger('routerTransition', [
        transition('home => details', [    
        query(':enter, :leave', style({ position: 'fixed', width:'100%'}), { optional: true }),
        group([ 
            query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', 
              style({ transform: 'translateX(0%)' })
              )], 
            { optional: true }),

            query(':leave', [
              style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', 
                  style({ transform: 'translateX(-100%)' })
                )],
              { optional: true }),
        ])
        ]),
        transition('details => home', [    
            query(':enter, :leave', style({ position: 'fixed', width:'100%'}), { optional: true }),
            group([ 
                query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', 
                  style({ transform: 'translateX(0%)' })
                  )], 
                { optional: true }),
    
                query(':leave', [
                  style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(100%)' })
                    )],
                  { optional: true }),
            ])
            ]),
    ]);