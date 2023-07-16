import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  public menuItems: MenuItem[] | undefined;
  public menuBarItems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuItems = [
          {
              label: 'Pipes de Angular',
              items: [
                {
                  label: 'Textos y Fechas',
                  icon: 'pi pi-align-left',
                  routerLink: '/'
                },
                {
                    label: 'Numeros',
                    icon: 'pi pi-dollar',
                    routerLink: '/numbers'
                },
                {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                    routerLink: '/uncommon'
                },
              ]
          },
          {
            label: 'Pipes personalizados',
            items: [
              {
                label: 'Otro elemento',
                icon: 'pi pi-cog'
              }
            ]
          }
      ];

  }

}
