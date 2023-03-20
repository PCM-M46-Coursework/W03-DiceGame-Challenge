/**
 * Toggles the visiblity of the calling element, via the `hidden` HTML attribute.
 */
Element.prototype.toggleDisplay = function()
{
    this.hidden = !this.hidden;
};

/**
 * Toggles the visiblity of the calling element, via the `hidden` HTML attribute.
 */
Element.prototype.show = function()
{
    this.hidden = false;
};

/**
 * Toggles the visiblity of the calling element, via the `hidden` HTML attribute.
 */
Element.prototype.hide = function()
{
    this.hidden = true;
};

/**
 * Gets or sets the HTML contents of the calling element.
 * @param {String} htmlString - A string of HTML to set as the content of each matched element.
 * @returns {String} If no value is passed in, for {@link htmlString}, returns the inner HTML of the calling element.
 *    Otherwise, returns void.
 */
Element.prototype.html = function(htmlString)
{
  if (htmlString === undefined) {
    return this.innerHTML;
  }
  this.innerHTML = htmlString;
};

/**
 * Adds a class to an element, for a specified amound of time.
 * 
 * @param {String} className - The name of the class to trigger.
 * @param {Number} ttl - The time, in ms, before the class should be removed. 
 */
Element.prototype.triggerClass = function(className, ttl)
{
  // Add the specified class to the element.
  this.classList.add(className);

  // If a TTL is provided, remove the class after the specified time.
  if (ttl) {
    setTimeout(() => {
      this.classList.remove(className);
    }, ttl);
  }
};

/**
 * Adds a class to an element, for a specified amound of time.
 * 
 * @param {String} attributeName - The name of the attribute to trigger.
 * @param {Number} ttl - The time, in ms, before the attribute should be removed. 
 */
Element.prototype.triggerAttr = function(attributeName, ttl)
{
  // Add the specified attribute to the element.
  this.setAttribute(attributeName, true);

  // If a TTL is provided, remove the attribute after the specified time.
  if (ttl) {
    setTimeout(() => {
      this.removeAttribute(attributeName);
    }, ttl);
  }
};