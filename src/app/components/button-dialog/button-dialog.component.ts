import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-dialog',
  standalone: true,
  imports: [MatDialogModule, RouterLink],
  templateUrl: './button-dialog.component.html',
  styleUrl: './button-dialog.component.css'
})
export class ButtonDialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(ButtonDialogComponent)
  }
}
