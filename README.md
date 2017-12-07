# driftrock-devtest

## Completion state

The task is unfinished, but most of the way there, with all the difficult plumbing done. Implementing the rest of the methods should be fairly simple.

Submitting now in the interest of fairness as specified in the task info PDF.

## Reflection

I invested extra time writing it in RXJS for the backpressure benefits,
only to find out that RXJS
[dropped backpressure](https://github.com/ReactiveX/RxJS/issues/71)
as a goal!
Other reactiveX implementations have it, but not JavaScript.

Ideally I wanted the reactive streams with backpressure to prevent
memory leaks, and I couldn't figure out a clean way to do it with generators.

Testability is decent, but could be improved.
Files would be split up further for genuine production use-case.