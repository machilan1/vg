export class UploadResponse {
  path!: string;

  constructor(data: UploadResponse) {
    Object.assign(this, data);
  }
}
