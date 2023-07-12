import { render } from '@testing-library/react';

import WebFeaturesCourseList from './web-features-course-list';

describe('WebFeaturesCourseList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebFeaturesCourseList />);
    expect(baseElement).toBeTruthy();
  });
});
