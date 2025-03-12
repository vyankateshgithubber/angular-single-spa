import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AssetUrlPipe } from '../../pipes/asset-url.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports : [AssetUrlPipe],
  standalone: true
})
export class ProfileComponent {
  profileName = 'John Doe';
  profileEmail = 'john.doe@example.com';
  profileLocation = 'New York, USA';
  
  private profileState = new BehaviorSubject<string>('Initial State');
  selectedState = 'Initial State';
  // Method to update the state
  updateProfileState(newState: string) {
    this.profileState.next(newState);
  }

  // Method to get the current state as an observable
  getProfileState() {
    return this.profileState.asObservable();
  }

  // Method to handle dropdown change
  onDropdownChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.updateProfileState(selectElement.value);
  }

  // Example of subscribing to the state changes
  ngOnInit() {
    this.getProfileState().subscribe(state => {
      this.selectedState = state;
      console.log('Profile state changed:', state);
    });
  }
}