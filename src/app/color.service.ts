import { Injectable } from '@angular/core';
import { Color } from './color-sort/color';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(
    private httpClient: HttpClient
  ) { }




//catch errors to display to user (in console)
private handleError(error:HttpErrorResponse){
  if (error.error instanceof ErrorEvent){
    console.error('Error Occured: ', error.error.message);
  }else {
    console.error(`Backend returned code ${error.status}, body was : ${error.error}`);
  } return throwError ('Something bad happened');
}



//access terumi api through color object GET ALL RESULTS
  getColors():Observable<Color[]>{
    return this.httpClient.get<Color[]>('https://api.tkusaka.com/palette_api.php?api_key=5b34ee3457dfa')
    .pipe(catchError(this.handleError));
  }

  getColor(id: Number):Observable<Color>{
    return this.httpClient.get<Color>('https://api.tkusaka.com/palette_api.php?api_key=5b34ee3457dfa&palette_id=' + id)
    .pipe(catchError(this.handleError));
  }

}
