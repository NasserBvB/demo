import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
	@Input()
	public page: string;
	constructor(public shared: SharedService) { }

	ngOnInit(): void {
		
	}

}
