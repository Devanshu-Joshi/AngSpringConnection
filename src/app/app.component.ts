import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpringbootConnection';

  constructor(private http: HttpClient) { }

  getData(): void {
    const url = 'http://localhost:3080/Students';

    this.http.get<any>(url)
      .pipe(
        catchError(error => {
          console.error('Error occurred', error);
          return of({});
        })
      )
      .subscribe(response => {
        console.log('Response:', response);
      });
  }

}
