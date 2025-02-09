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
The base cases of an empty array or array of size 1 run in constant time. The calculations 
for third and twoThirds also run in constant time, as well as the return call summing 
all results together. That leaves the 3 recursive calls, each time dividing the input size 
by three again and summing the results, giving $3T(n/3) + 1$ as the time complexity. 
This gives the recurrence relation as: 

$T(n)$ = \{ 1, if n <= 1; $3T(n/3) + 1$, if n > 1

for n > 1, $T(n)$ = $3T(n/3) + 1$  
                  = $9T(n/9) + 2$  
                  = $3^iT(n/3^i) + C$  
solve i = log<sub>3</sub>(n)  
                  = n * T(1) + C, where C is a constant 
                  = n 

Therefore the total time complexity of my algorithm is $\Theta(n)$ as constants are ignored
during asymptotic analysis. 

## Sources and Plagarism
#### Sources: 
https://www.geeksforgeeks.org/3-way-merge-sort/ (for inspiration on recusively splitting the array in thirds)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

