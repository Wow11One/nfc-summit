import { useCallback, useRef } from 'react';

/**
 * Hook to apply gradient to SVG icons
 * Usage: const iconRef = useIconGradient();
 * Then: <Icon ref={iconRef} />
 */
export const useIconGradient = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  const applyGradient = useCallback((svg: SVGSVGElement) => {
    if (!svg) return;

    // Use a unique ID for this instance to avoid conflicts
    const gradientId = `nomadz-gradient-${Math.random().toString(36).substr(2, 9)}`;

    let defs = svg.querySelector('defs');
    if (!defs) {
      defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      svg.insertBefore(defs, svg.firstChild);
    }

    // Remove any existing gradient with the same pattern
    const existingGradient = defs.querySelector(`[id^="nomadz-gradient"]`);
    if (existingGradient) {
      existingGradient.remove();
    }

    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.id = gradientId;
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '100%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '0%');
    gradient.setAttribute('gradientUnits', 'objectBoundingBox');
    gradient.setAttribute('gradientTransform', 'rotate(-65 0.5 0.5)');
    
    [['0%', '#4effd3'], ['100%', '#50b1d8']].forEach(([offset, color]) => {
      const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop.setAttribute('offset', offset);
      stop.setAttribute('stop-color', color);
      gradient.appendChild(stop);
    });
    
    defs.appendChild(gradient);

    // Apply gradient to all paths, ensuring they have a fill
    svg.querySelectorAll('path').forEach(path => {
      // Remove any existing fill that might interfere
      path.removeAttribute('fill');
      path.setAttribute('fill', `url(#${gradientId})`);
    });

    // Also handle any other elements that might need the gradient
    svg.querySelectorAll('circle, rect, ellipse, polygon, polyline').forEach(element => {
      element.removeAttribute('fill');
      element.setAttribute('fill', `url(#${gradientId})`);
    });
  }, []);

  const callbackRef = useCallback(
    (node: SVGSVGElement | null) => {
      ref.current = node;
      if (node) {
        // Apply gradient immediately when element is attached
        applyGradient(node);
      }
    },
    [applyGradient]
  );

  return callbackRef;
};

