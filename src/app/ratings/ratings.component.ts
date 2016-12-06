import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector:"pm-ratings",
    templateUrl: "ratings.component.html",
    styleUrls:['ratings.component.css']    
})
export class RatingComponent implements OnChanges {
    @Input() rating:number;

    @Output() ratingsClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() : void {
        console.log(this.rating);
    }

    onClick():void {
        this.ratingsClicked.emit(`Ratings was clicked ${this.rating}`);
    }
}