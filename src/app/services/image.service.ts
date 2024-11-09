import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = `https://api.unsplash.com/search/photos`;
  private accessKey = environment.unsplashApiKey;

  constructor(private http: HttpClient) {}

  getImages(page: number, query: string = '') {
    // Use 'popular' as a default query if none is provided
    const searchQuery = query || 'popular';
    const url = `${this.apiUrl}?page=${page}&per_page=10&query=${searchQuery}&client_id=${this.accessKey}`;
    return this.http.get(url);
  }
}
