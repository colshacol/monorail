import { GlobalAppThemeInterface } from '@monorail/helpers/theme';
export declare enum ElevationRange {
    Elevation0 = "elevation0",
    Elevation1 = "elevation1",
    Elevation2 = "elevation2",
    Elevation3 = "elevation3",
    Elevation4 = "elevation4",
    Elevation5 = "elevation5",
    Elevation6 = "elevation6",
    Elevation7 = "elevation7",
    Elevation8 = "elevation8",
    Elevation9 = "elevation9",
    Elevation10 = "elevation10",
    Elevation11 = "elevation11",
    Elevation12 = "elevation12",
    Elevation13 = "elevation13",
    Elevation14 = "elevation14",
    Elevation15 = "elevation15",
    Elevation16 = "elevation16",
    Elevation17 = "elevation17",
    Elevation18 = "elevation18",
    Elevation19 = "elevation19",
    Elevation20 = "elevation20",
    Elevation21 = "elevation21",
    Elevation22 = "elevation22",
    Elevation23 = "elevation23",
    Elevation24 = "elevation24"
}
export declare const getElevationBackground: (elevation: ElevationRange) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<GlobalAppThemeInterface>>;
export declare const getElevationShadow: (elevation: ElevationRange) => import("styled-components").FlattenSimpleInterpolation;
