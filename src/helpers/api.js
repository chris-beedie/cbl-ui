export function getTracks () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([
			{Title: 'Deceptacon', Artist: 'Le Tigre'},
			{Title: 'Window Licker', Artist:'Aphec Twin'}
		]
    ), 2000)
  })
}