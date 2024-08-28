import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-button-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialog],
  templateUrl: './button-dialog.component.html',
  styleUrl: './button-dialog.component.css'
})
export class ButtonDialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(ButtonDialogComponent);
  }

}
