import { Injectable } from '@angular/core';
import { Brush } from "./brush-sort/brush";
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class BrushService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBrushes(material?:String):Observable<Brush[]>{
    if(material){
      return this.httpClient.get<Brush[]>('http://hanaharrington.ca/Rush2Brush.php?api_key=Access123&rush2brush='+material)
      .pipe(catchError(err=>{throw (err)}));
    }
    return this.httpClient.get<Brush[]>('http://hanaharrington.ca/Rush2Brush.php?api_key=Access123')
    .pipe(catchError(err=>{throw (err)}));
  }

}
