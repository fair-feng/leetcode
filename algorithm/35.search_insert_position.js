/*
 * date: 2018-12-05
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/search-insert-position/
 *
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 *
 * Example 1:
 * ```
 * Input: [1,3,5,6], 5
 *Output: 2
 * ```
 *
 * Example 2:
 * ```
 * Input: [1,3,5,6], 2
 * Output: 1
 * ```
 *
 * Example 3:
 * ```
 * Input: [1,3,5,6], 7
 * Output: 4
 * ```
 * Example 4:
 * ```
 * Input: [1,3,5,6], 0
 * Output: 0
 * ```
 */

const searchInsert1 = function(nums, target) {
  let left = 0;
  let middle = 0;
  let right = nums.length - 1;
  while (left <= right) {
    middle = left + ((right - left) >> 1);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else return middle;
  }
  return left;
};

const searchInsert2 = function(nums, target) {
  if (!nums || nums.length < 1) return;
  return _searchInsert(nums, 0, nums.length - 1, target);  
  function _searchInsert(nums, left, right, target) {
    if (left > right) return left;
    let middle = left + ((right - left) >> 1);
    if (nums[middle] > target) return _searchInsert(nums, left, middle - 1, target);
    if (nums[middle] < target) return _searchInsert(nums, middle + 1, right, target);
    return middle;
  }
}
