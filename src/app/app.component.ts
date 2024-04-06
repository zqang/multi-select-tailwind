import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, MultiSelectComponent],
})
export class AppComponent {
  title = 'multi-select-tailwind';
  options: string[] = ['option1', 'option2', 'option3'];
  selectedOptions: string[] = [];
  toggleOption(opt: string) {
    if (this.selectedOptions.includes(opt)) {
      this.selectedOptions = this.selectedOptions.filter(
        (value) => value !== opt
      );
      this.options.push(opt);
    } else {
      this.selectedOptions.push(opt);
      this.options = this.options.filter((value) => value !== opt);
    }
  }

  clearOption() {
    //can put options to original options then assign original
    this.options = this.options.concat(this.selectedOptions);
    this.selectedOptions = [];
  }
}
