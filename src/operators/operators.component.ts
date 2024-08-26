import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { of, delay, merge, concat, switchMap, map, forkJoin, combineLatest, concatMap } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class OperatorsComponent implements OnInit {
  // Examples for the merge operators

  http = inject(HttpClient);

  // Sequence Does not matters
  mergeOperators() {
    // Create three Observables
    const stream1$ = of('Stream 1').pipe(delay(8000)); // Emits after 1 second
    const stream2$ = of('Stream 2').pipe(delay(2000)); // Emits after 2 seconds
    const stream3$ = of('Stream 3').pipe(delay(3000)); // Emits after 3 seconds

    // Merge the streams
    const mergedStream$ = merge(stream1$, stream2$, stream3$);

    // Subscribe to the merged stream
    mergedStream$.subscribe((value) => console.log(value));
  }

  // Sequence does matters
  concatOperators() {
    // Create three Observables
    const stream1$ = of('Stream 1').pipe(delay(8000)); // Emits after 1 second
    const stream2$ = of('Stream 2').pipe(delay(2000)); // Emits after 2 seconds
    const stream3$ = of('Stream 3').pipe(delay(3000)); // Emits after 3 seconds

    // Merge the streams
    const concatStream$ = concat(stream1$, stream2$, stream3$);

    // Subscribe to the merged stream
    concatStream$.subscribe((value) => console.log(value));
  }

  // Switch Operators with the merge and concat operators
  switchMapOperators(uid: number) {
  // Fetch user
  const fetchUser = (id: string) => {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(delay(100));
  };

  // Fetch posts by user
  const fetchPostByUser = (uid: string) => {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/?userId=${uid}`).pipe(delay(6000));
  };

  const fetchCommentsByUser = (uid: string) => {

    return this.http.get(`https://jsonplaceholder.typicode.com/comments/?userId=${uid}`);
  };

  fetchUser(uid + '')
    .pipe(
      switchMap((user: any) => {
        const userId = user.id;
        return combineLatest([
          fetchPostByUser(userId),
          fetchCommentsByUser(userId)
        ]).pipe(
          map(([posts, comments]) => ({ user, posts, comments }))
        );
      })
    )
    .subscribe((data) => {
      console.log(data);
    });
}

  ngOnInit() {
    //  this.concatOperators()
    //  this.mergeOperators()

    this.switchMapOperators(Math.ceil(Math.random() * 10));

  }
}
