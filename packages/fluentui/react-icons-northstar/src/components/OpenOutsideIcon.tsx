import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const OpenOutsideIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(iconClassNames.outline, classes.outlinePart)}
          d="M20.992 21.5c0 .203-.041.395-.121.574a1.592 1.592 0 0 1-.805.805 1.378 1.378 0 0 1-.574.121H10.5c-.203 0-.395-.04-.574-.121a1.574 1.574 0 0 1-.805-.805A1.378 1.378 0 0 1 9 21.5v-8.992c0-.203.04-.395.121-.574a1.604 1.604 0 0 1 .805-.805c.18-.081.371-.121.574-.121h3.992c.135 0 .252.05.352.148a.48.48 0 0 1 .148.352c0 .136-.05.253-.148.352a.48.48 0 0 1-.352.148H10.5a.484.484 0 0 0-.352.148.482.482 0 0 0-.148.352V21.5a.48.48 0 0 0 .148.352.48.48 0 0 0 .352.148h8.992a.483.483 0 0 0 .352-.148.48.48 0 0 0 .148-.352v-3.992c0-.135.049-.252.148-.352a.48.48 0 0 1 .352-.148c.135 0 .252.05.352.148.099.1.148.217.148.352V21.5zm1.5-7.5c0 .13-.051.246-.152.348a.477.477 0 0 1-.7 0 .48.48 0 0 1-.148-.348v-2.305l-5.156 5.164a.48.48 0 0 1-.352.148.476.476 0 0 1-.352-.152.484.484 0 0 1-.148-.348c0-.141.049-.26.148-.359L20.773 11h-2.289a.48.48 0 0 1-.352-.148.476.476 0 0 1-.148-.352c0-.135.049-.252.148-.352a.486.486 0 0 1 .352-.148h3.508c.13 0 .246.05.348.148a.473.473 0 0 1 .152.352V14z"
        />
        <path
          className={cx(iconClassNames.filled, classes.filledPart)}
          d="M21 21.5c0 .203-.041.396-.121.578a1.55 1.55 0 0 1-.801.801A1.406 1.406 0 0 1 19.5 23h-9c-.203 0-.396-.04-.578-.121a1.537 1.537 0 0 1-.801-.801A1.406 1.406 0 0 1 9 21.5v-9c0-.203.04-.396.121-.578.081-.182.188-.341.324-.477a1.56 1.56 0 0 1 .477-.324c.182-.08.375-.121.578-.121h4c.135 0 .252.05.352.148.098.1.148.217.148.352 0 .136-.05.253-.148.352A.483.483 0 0 1 14.5 12h-4a.484.484 0 0 0-.352.148.483.483 0 0 0-.148.352v9a.48.48 0 0 0 .148.352.48.48 0 0 0 .352.148h9a.483.483 0 0 0 .352-.148A.484.484 0 0 0 20 21.5v-4c0-.135.049-.252.148-.352A.484.484 0 0 1 20.5 17c.135 0 .252.05.352.148.098.1.148.217.148.352v4zm2-7.5a.906.906 0 0 1-.082.383 1.064 1.064 0 0 1-.535.535A.909.909 0 0 1 22 15c-.292 0-.508-.071-.648-.215a1.12 1.12 0 0 1-.289-.535 2.562 2.562 0 0 1-.07-.684c.004-.242.007-.464.007-.668l-4.305 4.305a.972.972 0 0 1-1.086.215 1.077 1.077 0 0 1-.535-.535.902.902 0 0 1-.082-.383c0-.135.024-.264.074-.387a.875.875 0 0 1 .215-.316L19.57 11.5c-.104 0-.207.001-.309.004-.102.003-.205.004-.309.004-.183 0-.361-.012-.535-.035a1.377 1.377 0 0 1-.465-.141c-.136-.07-.246-.172-.332-.305s-.129-.309-.129-.527c0-.135.027-.263.082-.383a1.059 1.059 0 0 1 .535-.535.914.914 0 0 1 .384-.082l3.5-.008c.135 0 .264.027.387.082a1.07 1.07 0 0 1 .539.539.937.937 0 0 1 .082.387V14z"
        />
      </g>
    </svg>
  ),
  displayName: 'OpenOutsideIcon',
});

export default OpenOutsideIcon;