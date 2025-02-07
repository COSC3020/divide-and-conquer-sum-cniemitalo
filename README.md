# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### My Answer
The recurrence relation for the runtime of the algorithm I implemented is: 
$T(n)$ {1,           if n \leg 1
        $3T(n/3)$,   if n > 1

for n > 1, $T(n)$ = $3T(n/3)$
                  = $9T(n/9)$
                  = $3^iT(n/3^i)$ 
solve i = log<sub>3</sub>(n)
                  = nT(1)
                  = n 
Therefore the total time complexity of my algorithm is $\Theta(n)$
This is because the comparisions to check the base cases: empty array, array of size 1, 
and array of size 2, all run in constant time. The calculations for third and twoThirds
also run in constant time, as well as the return call summing all results together. 
Then there are 3 recursive calls, each time dividing the input size by three again, $3T(n/3)$. 
