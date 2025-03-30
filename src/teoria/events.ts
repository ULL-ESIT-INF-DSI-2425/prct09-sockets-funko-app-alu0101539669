import { EventEmitter } from 'events';
import AsyncResource from 'async_hooks'; 

function demonstrateEventEmitter() {
  const emitter = new EventEmitter();

  emitter.on('event', () => {
    console.log('An event occurred!');
  });

  emitter.once('eventOnce', () => {
    console.log('This event occurs only once!');
  });

  emitter.prependListener('event', () => {
    console.log('Prepended listener for "event".');
  });

  emitter.prependOnceListener('eventOnce', () => {
    console.log('Prepended once listener for "eventOnce".');
  });

  emitter.emit('event');
  emitter.emit('eventOnce');

  console.log('Event names:', emitter.eventNames());
  console.log('Max listeners:', emitter.getMaxListeners());

  emitter.setMaxListeners(5);
  console.log('Updated max listeners:', emitter.getMaxListeners());

  console.log('Listener count for "event":', emitter.listenerCount('event'));
  console.log('Listeners for "event":', emitter.listeners('event'));
  console.log('Raw listeners for "event":', emitter.rawListeners('event'));

  emitter.off('event', () => {
    console.log('Listener removed for "event".');
  });

  emitter.removeAllListeners('eventOnce');
  console.log('All listeners removed for "eventOnce".');

  emitter.addListener('newListener', (eventName) => {
    console.log(`A new listener was added for event: ${eventName}`);
  });

  emitter.addListener('removeListener', (eventName) => {
    console.log(`A listener was removed for event: ${eventName}`);
  });

  emitter.emit(Symbol.for('nodejs.rejection'), new Error('Test error'), 'event');
  console.log('Symbol-based rejection event emitted.');
}

function demonstrateEventEmitterAsyncResource() {
  console.log('EventEmitterAsyncResource is not defined. This section of code has been removed.');
}

function demonstrateEventAPI() {
  const event = new Event('customEvent', { bubbles: true, cancelable: true });
  console.log('Event type:', event.type);
  console.log('Event bubbles:', event.bubbles);
  console.log('Event cancelable:', event.cancelable);
  console.log('Event composed:', event.composed);
  console.log('Event isTrusted:', event.isTrusted);

  console.log('Event phase:', event.eventPhase);
  console.log('Event default prevented:', event.defaultPrevented);

  event.preventDefault();
  console.log('Default prevented after calling preventDefault:', event.defaultPrevented);

  console.log('Event composed path:', event.composedPath());
  console.log('Event target:', event.target);
  console.log('Event current target:', event.currentTarget);

  event.stopPropagation();
  console.log('Event propagation stopped.');

  event.stopImmediatePropagation();
  console.log('Event immediate propagation stopped.');
}

function demonstrateEventTarget() {
  const eventTarget = new EventTarget();
  const eventListener = (event: Event) => {
    console.log(`EventTarget received event: ${event.type}`);
  };

  eventTarget.addEventListener('customEvent', eventListener);
  const customEvent = new Event('customEvent');
  eventTarget.dispatchEvent(customEvent);
  eventTarget.removeEventListener('customEvent', eventListener);
}

function demonstrateCustomEvent() {
  const customDetailEvent = new CustomEvent('customDetailEvent', { detail: { key: 'value' } });
  console.log('CustomEvent detail:', customDetailEvent.detail);
}

function demonstrateNodeEventTarget() {
  const nodeEventTarget = new EventEmitter(); // NodeEventTarget is similar to EventEmitter
  nodeEventTarget.on('nodeEvent', (arg) => {
    console.log(`NodeEventTarget received event with arg: ${arg}`);
  });

  nodeEventTarget.emit('nodeEvent', 'testArg');
  console.log('NodeEventTarget event names:', nodeEventTarget.eventNames());
  console.log('NodeEventTarget listener count for "nodeEvent":', nodeEventTarget.listenerCount('nodeEvent'));

  nodeEventTarget.setMaxListeners(10);
  console.log('NodeEventTarget max listeners:', nodeEventTarget.getMaxListeners());

  nodeEventTarget.removeAllListeners('nodeEvent');
  console.log('NodeEventTarget listeners removed for "nodeEvent".');
}

// Execute the functions to demonstrate usage
demonstrateEventEmitter();
demonstrateEventEmitterAsyncResource();
demonstrateEventAPI();
demonstrateEventTarget();
demonstrateCustomEvent();
demonstrateNodeEventTarget();
