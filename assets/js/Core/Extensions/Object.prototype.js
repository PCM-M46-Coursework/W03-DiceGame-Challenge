Object.prototype.forEachValue = function(fn)
{
    Object.values(this).forEach(o => fn(o));
}

Object.prototype.forEachKey = function(fn)
{
    Object.keys(this).forEach(o => fn(o));
}

Object.prototype.forEachProperty = function(fn)
{
    Object.entries(this).forEach(o => fn(o));
}