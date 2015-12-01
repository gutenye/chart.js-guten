(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory({}) :
  global.Chart = factory(Chart)
}(this, function(Chart) {
// generated by ./generate-colors
var colors = [
  ["#bf616a", "#c6737b"],
  ["#5B90BF", "#6d9cc6"],
  ["#d08770", "#d69783"],
  ["#ebcb8b", "#efd5a1"],
  ["#a3be8c", "#b0c79c"],
  ["#96b5b4", "#a5c0bf"],
  ["#8fa1b3", "#9eaebd"],
  ["#b48ead", "#be9db8"],
  ["#ab7967", "#b48777"]
]

// data = [["Hello", 100], ..]
Chart.toDoughnutData = function(data) {
  return data.map((v,i) => {
    var index = i % colors.length
    return {label: v[0], value: v[1], color: colors[index][0], highlight: colors[index][1]}
  })
}

return Chart
}))
