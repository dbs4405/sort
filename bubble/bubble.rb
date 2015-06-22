#Bubble sort in Ruby / D Schiele / 6/21/2015

def bubble (arr) 
  n = arr.length
  loop do
    swapped = false

    (n-1).times do |i|
      if arr[i] < arr[i+1]
        arr[i], arr[i+1] = arr[i+1], arr[i]
        swapped = true
      end
    end

    break if not swapped
  end
  arr  
end