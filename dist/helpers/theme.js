"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeColorBase = exports.getThemeColor = exports.monorailTheme = exports.ThemeColors = exports.Mode = void 0;

var _color = require("./color");

let Mode;
exports.Mode = Mode;

(function (Mode) {
  Mode["Light"] = "light";
  Mode["Dark"] = "dark";
})(Mode || (exports.Mode = Mode = {}));

let ThemeColors;
exports.ThemeColors = ThemeColors;

(function (ThemeColors) {
  ThemeColors["AccentPrimary"] = "accentPrimary";
  ThemeColors["ActionPrimary"] = "actionPrimary";
  ThemeColors["ActionSecondary"] = "actionSecondary";
  ThemeColors["ApplicationPrimary"] = "applicationPrimary";
  ThemeColors["ApplicationSecondary"] = "applicationSecondary";
  ThemeColors["BackgroundPrimary"] = "backgroundPrimary";
  ThemeColors["BackgroundSecondary"] = "backgroundSecondary";
  ThemeColors["BrandPrimary"] = "brandPrimary";
  ThemeColors["BrandSecondary"] = "brandSecondary";
  ThemeColors["PrimaryColor"] = "primaryColor";
  ThemeColors["SecondaryColor"] = "secondaryColor";
  ThemeColors["Text200"] = "text200";
  ThemeColors["Text500"] = "text500";
  ThemeColors["Text600"] = "text600";
  ThemeColors["Text700"] = "text700";
  ThemeColors["Text900"] = "text900";
  ThemeColors["Text1000"] = "text1000";
})(ThemeColors || (exports.ThemeColors = ThemeColors = {}));

const themeBase = {
  [ThemeColors.AccentPrimary]: _color.Colors.AccentPurple700,
  [ThemeColors.ActionPrimary]: _color.Colors.BrandLightBlue,
  [ThemeColors.BrandPrimary]: _color.Colors.BrandLightBlue,
  [ThemeColors.BrandSecondary]: _color.Colors.BrandDarkBlue
};
const monorailTheme = {
  linkColor: _color.Colors.BrandLightBlue,
  brandAccentColor: _color.Colors.BrandDarkBlue,
  [ThemeColors.ApplicationPrimary]: _color.Colors.BrandLightBlue,
  [ThemeColors.ApplicationSecondary]: _color.Colors.BrandDarkBlue,
  mode: Mode.Light,
  [Mode.Light]: { ...themeBase,
    [ThemeColors.ActionSecondary]: _color.Colors.BrandLightBlue,
    [ThemeColors.BackgroundPrimary]: _color.Colors.White,
    [ThemeColors.BackgroundSecondary]: _color.Colors.White,
    [ThemeColors.PrimaryColor]: _color.Colors.Black,
    [ThemeColors.SecondaryColor]: _color.Colors.White,
    [ThemeColors.Text200]: _color.Colors.Black24,
    [ThemeColors.Text500]: _color.Colors.Black54,
    [ThemeColors.Text600]: _color.Colors.Black62,
    [ThemeColors.Text700]: _color.Colors.Black74,
    [ThemeColors.Text900]: _color.Colors.Black89,
    [ThemeColors.Text1000]: _color.Colors.BrandDarkBlue
  },
  [Mode.Dark]: { ...themeBase,
    [ThemeColors.ActionSecondary]: _color.Colors.White,
    [ThemeColors.BackgroundPrimary]: _color.Colors.DarkGrey,
    [ThemeColors.BackgroundSecondary]: _color.Colors.White,
    [ThemeColors.PrimaryColor]: _color.Colors.White,
    [ThemeColors.SecondaryColor]: _color.Colors.Black,
    [ThemeColors.Text200]: _color.Colors.White89,
    [ThemeColors.Text500]: _color.Colors.White89,
    [ThemeColors.Text600]: _color.Colors.White89,
    [ThemeColors.Text700]: _color.Colors.White,
    [ThemeColors.Text900]: _color.Colors.White,
    [ThemeColors.Text1000]: _color.Colors.White
  }
};
exports.monorailTheme = monorailTheme;

const getThemeColor = (colorKey, a = 1) => {
  return ({
    theme
  }) => {
    if (colorKey === ThemeColors.ApplicationPrimary || colorKey === ThemeColors.ApplicationSecondary) {
      return (0, _color.getColor)(theme[colorKey], a);
    }

    return (0, _color.getColor)(theme[theme.mode][colorKey], a);
  };
};

exports.getThemeColor = getThemeColor;

const getThemeColorBase = (colorKey, a = 1) => {
  return ({
    theme
  }) => {
    if (colorKey === ThemeColors.ApplicationPrimary || colorKey === ThemeColors.ApplicationSecondary) {
      return (0, _color.colorHSLAMap)({
        color: theme[colorKey],
        alpha: a
      });
    }

    return (0, _color.colorHSLAMap)({
      color: theme[theme.mode][colorKey],
      alpha: a
    });
  };
};

exports.getThemeColorBase = getThemeColorBase;