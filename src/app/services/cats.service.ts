import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import { Cat } from '@models/cat.model';
import { BreedsResponse } from '@models/breeds-response.model';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getCats() {
    const request = this.httpClient.get<BreedsResponse>(environment.apiUrl, {
      params: {
        limit: '10'
      }
    });

    const reponse = await firstValueFrom(request);

    return this.mapResponse(reponse);
  }

  private mapResponse(response: BreedsResponse): Cat[] {
    return response.map(cat => ({
      breedName: cat.name,
      origin: cat.origin,
      affectionLevel: cat.affection_level,
      intelligence: cat.intelligence,
      imageUrl: `${environment.imagesUrl}/${cat.reference_image_id}.jpg`,
    } as Cat))
  }
}
