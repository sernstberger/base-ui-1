'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import type { BaseUIComponentProps } from '../utils/types';
import { Field } from '../field';

/**
 * A native textarea element that automatically works with [Field](https://base-ui.com/react/components/field).
 * Renders a `<textarea>` element.
 *
 * Documentation: [Base UI Textarea](https://base-ui.com/react/components/textarea)
 */
const Textarea = React.forwardRef(function Textarea(
  props: Textarea.Props,
  forwardedRef: React.ForwardedRef<HTMLTextAreaElement>,
) {
  const { render, className, ...otherProps } = props;
  return (
    <Field.Control
      ref={forwardedRef}
      render={render || ((renderProps) => <textarea {...renderProps} />)}
      className={className}
      {...otherProps}
    />
  );
});

namespace Textarea {
  export interface Props extends BaseUIComponentProps<'textarea', State> {
    /**
     * Number of visible text lines for the control.
     */
    rows?: number;
  }

  export interface State {}
}

Textarea.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * CSS class applied to the element, or a function that
   * returns a class based on the component's state.
   */
  className: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Allows you to replace the component's HTML element
   * with a different tag, or compose it with another component.
   *
   * Accepts a `ReactElement` or a function that returns the element to render.
   */
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * Number of visible text lines for the control.
   */
  rows: PropTypes.number,
} as any;

export { Textarea };
