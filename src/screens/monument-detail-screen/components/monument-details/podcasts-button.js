import React from "react";
import { connect } from "react-redux";
import { openMonumentPodcastModal } from "../../../../redux/actions/modal-actions";
import { DefaultTheme } from "../../../../theme/default-theme";
import { useLocate } from "../../../../components/hooks/locate-hooks";
import RectangularButton from "../../../../components/atoms/buttons/rectangular-button/rectangular-button";

function PodcastsButton({ sources, openMonumentPodcastModal, style = {}, disabled = false }) {
  const { t } = useLocate();

  return (
    <RectangularButton
      iconName="podcast"
      iconType="font-awesome-5"
      color={DefaultTheme.palette.colors.primary.extraLight}
      style={style}
      textColor="white"
      disabled={disabled}
      title={t("Podcasts")}
      onPress={() => openMonumentPodcastModal(sources)}
    />
  );
}

const bindMethodsToProps = { openMonumentPodcastModal };

export default connect(null, bindMethodsToProps)(PodcastsButton);
