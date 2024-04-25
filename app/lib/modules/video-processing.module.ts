const videoProcessing = (key:any)=>{
    let tmp = key.split(".");
    let folder = tmp[0];
  
    const params = {
      "Settings": {
        "OutputGroups": [
          {
            "Name": "CMAF",
            "Outputs": [
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1920x1080p_30Hz_10Mbps_Qvbr_Vq9",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1920x1080p_30Hz_10000Kbps_Qvbr_Vq9"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1920x1080p_30Hz_8Mbps_Qvbr_Vq8",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1920x1080p_30Hz_8000Kbps_Qvbr_Vq8"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1440x810p_30Hz_6Mbps_Qvbr_Vq9",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1440x810p_30Hz_6000Kbps_Qvbr_Vq9"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1440x810p_30Hz_5Mbps_Qvbr_Vq7",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1440x810p_30Hz_5000Kbps_Qvbr_Vq7"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1280x720p_30Hz_5Mbps_Qvbr_Vq9",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1280x720p_30Hz_5000Kbps_Qvbr_Vq9"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1280x720p_30Hz_4Mbps_Qvbr_Vq7",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_1280x720p_30Hz_4000Kbps_Qvbr_Vq7"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_960x540p_30Hz_2.5Mbps_Qvbr_Vq7",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_960x540p_30Hz_2500Kbps_Qvbr_Vq7"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_768x432p_30Hz_1.2Mbps_Qvbr_Vq7",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_768x432p_30Hz_1200Kbps_Qvbr_Vq7"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_640x360p_30Hz_0.8Mbps_Qvbr_Vq7",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_640x360p_30Hz_800Kbps_Qvbr_Vq7"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Avc_16x9_Sdr_416x234p_30Hz_0.36Mbps_Qvbr_Vq7",
                "NameModifier": "_Ott_Cmaf_Cmfc_Avc_16x9_Sdr_416x234p_30Hz_360Kbps_Qvbr_Vq7"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Aac_He_96Kbps",
                "NameModifier": "_Ott_Cmaf_Cmfc_Aac_He_96Kbps"
              },
              {
                "Preset": "System-Ott_Cmaf_Cmfc_Aac_He_64Kbps",
                "NameModifier": "_Ott_Cmaf_Cmfc_Aac_He_64Kbps"
              }
            ],
            "OutputGroupSettings": {
              "Type": "CMAF_GROUP_SETTINGS",
              "CmafGroupSettings": {
                "WriteHlsManifest": "ENABLED",
                "WriteDashManifest": "ENABLED",
                "SegmentLength": 30,
                "FragmentLength": 3,
                "SegmentControl": "SEGMENTED_FILES",
                "ManifestDurationFormat": "INTEGER",
                "StreamInfResolution": "INCLUDE",
                "ClientCache": "ENABLED",
                "ManifestCompression": "NONE",
                "CodecSpecification": "RFC_4281",
                "Destination": "s3://khanott/stream/"+folder
              }
            }
          }
        ],
        "AdAvailOffset": 0,
        "Inputs": [
          {
            "TimecodeSource": "ZEROBASED",
            "VideoSelector": {},
            "AudioSelectors": {
              "Audio Selector 1": {
                "DefaultSelection": "DEFAULT"
              }
            },
            "FileInput": "s3://khanott/"+key
          }
        ],
        "FollowSource": 1
      },
      "AccelerationSettings": {
        "Mode": "DISABLED"
      },
      "HopDestinations": [],
      "JobTemplate": "System-Ott_Cmaf_Cmfc_Avc_Aac_Sdr_Qvbr",
      "Role":"arn:aws:iam::211125364315:role/service-role/MediaConvert_Default_Role"
    };
    return params;
  }
  
  export default videoProcessing;
  