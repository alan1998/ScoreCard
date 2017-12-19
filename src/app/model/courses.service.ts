import {Injectable} from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/Rx';
import {Response} from '@angular/http';

@Injectable()
export class CoursesService{
    constructor(private http: Http){}

    getCourses(){
        return this.http.get('http://localhost:3000/courses').map(
            (response:Response) => {
                const data = response.json();
                return data;
            }
        );
    }
}