import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ButtonDialogComponent } from '../button-dialog/button-dialog.component';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(ButtonDialogComponent)
  }
}
