```javascript
<div class="flex items-center justify-center h-screen">
  <div class="bg-gray-200 p-4 rounded-lg shadow-md overflow-auto">
    <h1 class="text-2xl font-bold mb-4">My Component</h1>
    <p class="text-gray-700 text-base">This is a simple component with potentially dynamic and expanding content.</p>
  </div>
</div>
```
By adding the `overflow-auto` class, any content exceeding the container's boundaries will automatically scroll.  Alternatively, you could specify exact height using `h-[value]` or use `max-h-[value]` to set a maximum height and use `overflow-y-auto` to enable vertical scrolling if content exceeds the maximum height.  Choosing the best solution depends on your specific layout requirements.