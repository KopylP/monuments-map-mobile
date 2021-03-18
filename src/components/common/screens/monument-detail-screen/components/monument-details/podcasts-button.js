import React from "react";
import { connect } from "react-redux";
import { openMonumentPodcastModal } from "../../../../../../redux/actions/modal-actions";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import { useLocate } from "../../../../../hooks/locate-hooks";
import RectangularButton from "../../../../../template/buttons/rectangular-button";

function PodcastsButton({ sources, openMonumentPodcastModal, style = {} }) {
  const { t } = useLocate();

  return (
    <RectangularButton
      iconName="podcast"
      iconType="font-awesome-5"
      color={DefaultTheme.palette.colors.primary.extraLight}
      style={style}
      textColor="white"
      title={t("Podcasts")}
      onPress={() => openMonumentPodcastModal(sources)}
    />
  );
}

const bindMethodsToProps = { openMonumentPodcastModal };

export default connect(null, bindMethodsToProps)(PodcastsButton);
