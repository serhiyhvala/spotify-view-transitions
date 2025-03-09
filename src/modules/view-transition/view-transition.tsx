import {
  FC,
  ViewTransitionProps as Props,
  ReactNode,
  unstable_ViewTransition as Transition,
} from "react";

interface ViewTransitionProps extends Props {
  children: ReactNode;
}

export const ViewTransition: FC<ViewTransitionProps> = ({
  children,
  ...props
}) => <Transition {...props}>{children}</Transition>;
