import {  Injectable} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Injectable({
  providedIn: 'root'
})
export class ModelDrawerService {
  private sidenav!: MatDrawer;

	public setSidenav(sidenav: MatDrawer) {
		this.sidenav = sidenav;
	}

	public toggle(): void {
		this.sidenav.toggle();
	}
}
