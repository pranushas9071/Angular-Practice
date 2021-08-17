import { HttpHandler } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { DogServiceService } from './dog-service.service';
describe('DogServiceService', () => {
  let service: DogServiceService;
  let httpTestControl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpHandler, DogServiceService],
    });
    service = TestBed.inject(DogServiceService);
    httpTestControl = TestBed.inject(HttpTestingController);
  });

afterEach(()=>{
  httpTestControl.verify()

})

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('testing addBreed',fakeAsync(
    inject(
      [DogServiceService, HttpTestingController],
      (dogService: DogServiceService, backend: HttpTestingController)=> {
    // const url = 'http://localhost:8080/dog/addBreed';
    // const gurl="http://localhost:8080/dog/getAll";
    const data = { breed: 'newBreed' };
    let res = null;
    let test = `"${data.breed}" added successfully!!`;
    dogService.addBreed(data).subscribe((ret: any) => {
      res = ret;
      expect(res).toBe(test);
    });
    // service.getAll().subscribe((ret:any)=>{
    //   res=ret;
    // })
    const req = backend.expectOne({url:'http://localhost:8080/dog/addBreed'});
    req.flush(test);
    // expect(req.request.method).toEqual('POST');
    // expect(req.request.responseType).toEqual('text');
    // tick();
  })));
});
