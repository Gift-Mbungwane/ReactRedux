import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { fetchGdFiles } from "../actions/googleDriveAction";

class GoogleDriveFilesList extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.fetchGdFiles(["mp3"]);
  }

  /*  beginFetchGdFiles = () => {
    // this.setState({ count: this.state.count + 1 });

    this.props.beginFetchGdFiles();
  };

  successFetchGdFiles = () => {
    //this.setState({ count: this.state.count - 1 });
    this.props.successFetchGdFiles();
  };

  failureFetchGdFiles = () => {
    // this.setState({ count: 0 });
    this.props.failureFetchGdFiles();
  };
*/
  render() {
    const { files, loading, error } = this.props;

    if (error) {
      return <Text>{error}</Text>;
    }
    if (loading) {
      return <Text>Loading...</Text>;
    }

    return (
      <View>
        {files.map((file) => (
          <Text key={file.id}>{file.originalFilename}</Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    files: state.gdFiles.files,
    loading: state.gdFiles.loading,
    error: state.gdFiles.error,
  };
};

const mapDispatchToProps = {
  fetchGdFiles: fetchGdFiles,
  /* beginFetchGdFiles,
    successFetchGdFiles,
  failureFetchGdFiles,*/
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleDriveFilesList);
