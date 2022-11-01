import React from 'react';
2import { storiesOf } from '@storybook/react';
3import Board from '../src/board/board';
4import { authorQuoteMap, generateQuoteMap } from '../src/data';
5
6const data = {
7  medium: () => generateQuoteMap(100),
8  large: () => generateQuoteMap(500),
};

  storiesOf('Examples/board', module)
  .add('simple', () => <Board initial={authorQuoteMap} />)
  .add('dragging a clone', () => <Board initial={authorQuoteMap} useClone />)
  .add('medium data set', () => <Board initial={data.medium()} />)
  .add('large data set', () => <Board initial={data.large()} />)
  .add('long lists in a short container', () => (
    <Board initial={data.medium()} containerHeight="60vh" />
  ))
  .add('scrollable columns', () => (
    <Board initial={authorQuoteMap} withScrollableColumns />
 ))
  .add('with combining', () => (
    <Board initial={authorQuoteMap} isCombineEnabled />
  ))
  .add('with combining and cloning', () => (
    <Board initial={authorQuoteMap} isCombineEnabled useClone />
  ));
  .add('with combining', () => (
    <Board initial={authorQuoteMap} isCombineEnabled />
  ))
  .add('scrollable columns', () => (
    <Board initial={authorQuoteMap} withScrollableColumns />
  ))
  .add('long lists in a short container', () => (
    <Board initial={data.medium()} containerHeight="60vh" />
  ))
  .add('large data set', () => <Board initial={data.large()} />)
  .add('medium data set', () => <Board initial={data.medium()} />)
  .add('dragging a clone', () => <Board initial={authorQuoteMap} useClone />)
  .add('simple', () => <Board initial={authorQuoteMap} />)
  .add('dragging a clone', () => <Board initial={authorQuoteMap} useClone />)
  .add('medium data set', () => <Board initial={data.medium()} />)
  .add('large data set', () => <Board initial={data.large()} />)
  .add('long lists in a short container', () => (
    <Board initial={data.medium()} containerHeight="60vh" />
  ))
  .add('scrollable columns', () => (
    <Board initial={authorQuoteMap} withScrollableColumns />
  ))
  .add('with combining', () => (
    <Board initial={authorQuoteMap} isCombineEnabled />
  ))
  .add('with combining and cloning', () => (
    <Board initial={authorQuoteMap} isCombineEnabled useClone />
  ));