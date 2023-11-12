import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
  visibleMember: number = -1;
  content: string[] = [
    'One-on-One Training',
    'Group Training',
    'Flexibility and Mobility Training',
    'Rehabilitation Support',
    'Strength Training',
    'Coordination and Balance Training',
    'Monitoring and Adjustments',
    'Corrective Exercise',
    'Customized Workout Plans',
    'Goal Setting',
    'Educational Workshops',
  ];
}
