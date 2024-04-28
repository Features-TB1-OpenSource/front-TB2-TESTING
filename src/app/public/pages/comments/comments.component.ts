import { Component } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  selectedButton: HTMLElement | null = null;
  rating = 0;

  selectButton(event: Event) {
    if (this.selectedButton) {
      this.selectedButton.classList.remove('selected');
    }
    this.selectedButton = event.target as HTMLElement;
    this.selectedButton.classList.add('selected');
  }
}
