import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions  }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Championship, Team, TeamChampionshipRow, ChampionshipRow }  from '../../../sdk/models';

@Injectable()
export class TeamService {
  private teamsUrl = 'http://localhost:3000/api/teams';  // URL to web API
  
  constructor (private http: Http) {}

  getTeams(): Observable<Team[]> {
    return this.http.get(this.teamsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getTeamById(id: any): Observable<Team> {
    return this.http.get(this.teamsUrl + "/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getTeamsChampionship(id: any): Observable<Team> {
    return this.http.get(this.teamsUrl + "/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  create(name: string): Observable<Team> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.teamsUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}