import { Component, OnChanges, Input, Output,EventEmitter } from '@angular/core';

@Component({
 selector: 'pm-start',
 templateUrl: './star.component.html',
 styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
@Input() rating: number;
starWidth: number;
@Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();

ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
}

onClick(): void {
   this.ratingClick.emit(`${this.rating}`);
}
}