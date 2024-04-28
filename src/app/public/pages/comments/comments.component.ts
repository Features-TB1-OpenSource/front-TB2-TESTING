import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  selectedButton: HTMLElement | null = null;
  rating = 0;

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  selectButton(event: Event) {
    if (this.selectedButton) {
      this.selectedButton.classList.remove('selected');
    }
    this.selectedButton = event.target as HTMLElement;
    this.selectedButton.classList.add('selected');
  }

  submitComment() {
    this.snackBar.open('Gracias por tu comentario!!!', '', {
      duration: 3000,
    });

    setTimeout(() => {
      this.router.navigate(['/unirider/maps']);
    }, 3000);
  }
}
