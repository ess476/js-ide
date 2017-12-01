function handleJS(e)
{
	res = eval(e);

	self.postMessage({
		'res': res
	});
}

self.onmessage = function(e)
{
	handleJS(e.data.msg);
}