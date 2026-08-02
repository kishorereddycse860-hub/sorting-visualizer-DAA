/* =========================================================
   SortLab — shared data
   Edit PROJECT_INFO below with your actual subject/faculty details.
   ========================================================= */

const PROJECT_INFO = {
  title: "Sorting Algorithm Visualizer",
  problemStatement: "Design and implement a web-based application that visualizes the working of classical sorting algorithms through step-by-step, interactive animation — enabling clearer understanding of comparison and swap behaviour, and making abstract time-complexity differences visually observable.",
  studentName: "Kishore Reddy Gayam",
  facultyName: "[Faculty Name — edit this]",
  subject: "Design and Analysis of Algorithms (DAA)",
  institution: "Marwadi University, Dept. of CSE (AI/ML)",
};

const ALGO_LIST = ["bubble", "selection", "insertion", "merge", "quick", "heap"];

const ALGO_DATA = {
  bubble: {
    name: "Bubble Sort",
    slug: "bubble",
    tagline: "Repeatedly swaps adjacent out-of-order elements until nothing is left to swap.",
    description: "Bubble Sort walks through the array again and again, comparing each pair of neighbouring elements and swapping them if they're in the wrong order. With every full pass, the largest remaining element \"bubbles up\" to its correct position at the end of the array — hence the name.",
    howItWorks: [
      "Start at the beginning of the array and compare the first two elements.",
      "If the left element is bigger than the right one, swap them.",
      "Move one step forward and repeat the comparison for the next pair.",
      "After one full pass, the largest element has settled at the end — repeat the whole pass on the remaining unsorted part.",
      "Stop once a full pass happens with no swaps — the array is sorted."
    ],
    pseudocode:
`function bubbleSort(arr):
    n = length(arr)
    for i from 0 to n-1:
        for j from 0 to n-i-2:
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])
    return arr`,
    complexity: { best: "n", avg: "n²", worst: "n²", space: "1" }
  },

  selection: {
    name: "Selection Sort",
    slug: "selection",
    tagline: "Repeatedly picks the smallest remaining element and places it at the front.",
    description: "Selection Sort splits the array into a sorted part (at the front) and an unsorted part (the rest). On every pass it scans the entire unsorted part to find the minimum element, then swaps it into place at the front of the unsorted region — growing the sorted part by one element each time.",
    howItWorks: [
      "Treat the whole array as unsorted at the start.",
      "Scan the unsorted part to find the smallest element.",
      "Swap that minimum element with the first element of the unsorted part.",
      "That position is now considered sorted — shrink the unsorted part by one.",
      "Repeat until only one element remains, which is automatically in place."
    ],
    pseudocode:
`function selectionSort(arr):
    n = length(arr)
    for i from 0 to n-2:
        minIndex = i
        for j from i+1 to n-1:
            if arr[j] < arr[minIndex]:
                minIndex = j
        swap(arr[i], arr[minIndex])
    return arr`,
    complexity: { best: "n²", avg: "n²", worst: "n²", space: "1" }
  },

  insertion: {
    name: "Insertion Sort",
    slug: "insertion",
    tagline: "Builds a sorted section one element at a time, like sorting playing cards in hand.",
    description: "Insertion Sort grows a sorted section at the front of the array. For every new element, it slides backwards through the already-sorted section, shifting larger elements one step to the right, until it finds the exact spot where the new element belongs.",
    howItWorks: [
      "Consider the first element as a trivially sorted section of size one.",
      "Pick the next element as the 'key' to insert.",
      "Compare the key with elements to its left in the sorted section.",
      "Shift every larger element one position to the right to make room.",
      "Insert the key into the gap created — repeat for every remaining element."
    ],
    pseudocode:
`function insertionSort(arr):
    for i from 1 to length(arr)-1:
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j = j - 1
        arr[j+1] = key
    return arr`,
    complexity: { best: "n", avg: "n²", worst: "n²", space: "1" }
  },

  merge: {
    name: "Merge Sort",
    slug: "merge",
    tagline: "Splits the array in half recursively, sorts each half, then merges them back together.",
    description: "Merge Sort is a divide-and-conquer algorithm. It splits the array into halves recursively until each piece has just one element (trivially sorted), then merges pairs of sorted pieces back together in the correct order, all the way back up to one fully sorted array.",
    howItWorks: [
      "If the array has one element or none, it's already sorted — stop.",
      "Otherwise, split the array into a left half and a right half.",
      "Recursively sort the left half using the same process.",
      "Recursively sort the right half using the same process.",
      "Merge the two now-sorted halves together by repeatedly picking the smaller front element from each."
    ],
    pseudocode:
`function mergeSort(arr, lo, hi):
    if hi - lo <= 1: return
    mid = (lo + hi) / 2
    mergeSort(arr, lo, mid)
    mergeSort(arr, mid, hi)
    merge(arr, lo, mid, hi)

function merge(arr, lo, mid, hi):
    left  = arr[lo:mid]
    right = arr[mid:hi]
    i = j = 0; k = lo
    while i < len(left) and j < len(right):
        if left[i] <= right[j]: arr[k++] = left[i++]
        else:                   arr[k++] = right[j++]
    copy remaining left/right into arr`,
    complexity: { best: "n log n", avg: "n log n", worst: "n log n", space: "n" }
  },

  quick: {
    name: "Quick Sort",
    slug: "quick",
    tagline: "Picks a pivot, partitions around it, then recurses on both sides.",
    description: "Quick Sort is another divide-and-conquer algorithm. It picks a 'pivot' element, then rearranges the array so everything smaller than the pivot ends up on its left and everything larger ends up on its right. It then recursively applies the same process to both sides.",
    howItWorks: [
      "Pick a pivot element — this implementation uses the last element of the range.",
      "Walk through the range, moving every element smaller than the pivot to the left side.",
      "Once the scan finishes, swap the pivot into its correct final position.",
      "Recursively apply the same process to the elements left of the pivot.",
      "Recursively apply the same process to the elements right of the pivot."
    ],
    pseudocode:
`function quickSort(arr, lo, hi):
    if lo >= hi: return
    p = partition(arr, lo, hi)
    quickSort(arr, lo, p-1)
    quickSort(arr, p+1, hi)

function partition(arr, lo, hi):
    pivot = arr[hi]
    i = lo - 1
    for j from lo to hi-1:
        if arr[j] < pivot:
            i = i + 1
            swap(arr[i], arr[j])
    swap(arr[i+1], arr[hi])
    return i + 1`,
    complexity: { best: "n log n", avg: "n log n", worst: "n²", space: "log n" }
  },

  heap: {
    name: "Heap Sort",
    slug: "heap",
    tagline: "Builds a max-heap, then repeatedly extracts the largest element.",
    description: "Heap Sort first rearranges the array into a max-heap — a binary tree structure (stored in the array itself) where every parent is larger than its children, so the largest element sits at the root. It then repeatedly swaps the root with the last unsorted element and re-heapifies the reduced heap.",
    howItWorks: [
      "Build a max-heap from the entire array so the largest value sits at index 0.",
      "Swap the root (largest element) with the last element of the unsorted region.",
      "Shrink the heap by one and 'sift down' the new root to restore the max-heap property.",
      "Repeat the swap-and-sift-down process until the heap has only one element left.",
      "The array is now fully sorted in ascending order."
    ],
    pseudocode:
`function heapSort(arr):
    n = length(arr)
    for i from n/2 - 1 down to 0:
        heapify(arr, n, i)
    for end from n-1 down to 1:
        swap(arr[0], arr[end])
        heapify(arr, end, 0)

function heapify(arr, size, root):
    largest = root
    left = 2*root+1; right = 2*root+2
    if left < size and arr[left] > arr[largest]:  largest = left
    if right < size and arr[right] > arr[largest]: largest = right
    if largest != root:
        swap(arr[root], arr[largest])
        heapify(arr, size, largest)`,
    complexity: { best: "n log n", avg: "n log n", worst: "n log n", space: "1" }
  }
};
