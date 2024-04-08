import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  input,
  output,
} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [NgIconComponent, FormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css',
})
export class MultiSelectComponent implements OnInit, OnChanges {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() isMultipleTag: boolean = false;
  @Input() formControl: string = '';
  open: boolean = false;
  selectedOptions: string[] = [];
  filteredOptions: string[] = this.options;
  selectedOptionChange = output<string[]>();
  clearOptionChange = output();
  searchText: string = '';

  ngOnInit(): void {
    this.filteredOptions = this.options;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['options']) {
      this.filteredOptions = this.options.filter((opt) =>
        opt.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  onSearchChange() {
    if (!this.searchText || this.searchText === '') {
      this.filteredOptions = this.options;
    } else {
      this.filteredOptions = this.options.filter((opt) =>
        opt.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  toggle() {
    this.open = !this.open;
  }

  toggleOption(option: string) {
    if (this.isMultipleTag) {
      if (this.selectedOptions.includes(option)) {
        this.selectedOptions = this.selectedOptions.filter(
          (value) => value !== option
        );
        this.filteredOptions.push(option);
      } else {
        this.selectedOptions.push(option);
        this.filteredOptions = this.filteredOptions.filter(
          (value) => value !== option
        );
      }
    } else {
      this.selectedOptions = [option];
      this.filteredOptions = this.options.filter((value) => value !== option);
    }

    this.selectedOptionChange.emit(this.selectedOptions);
  }

  clearOption() {
    this.filteredOptions = this.filteredOptions.concat(this.selectedOptions);
    this.selectedOptions = [];
    this.selectedOptionChange.emit(this.selectedOptions);
  }
}
