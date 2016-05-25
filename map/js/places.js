function getColor(status){
  if (status == 'Acquired'){
    return '#000000';
  }
  else if (status == 'Accelerator'){
    return '#fdff16';
  }
  else if (status == 'Entrepreneurial Resource'){
    return '#0511b6';
  }
  else if (status == 'Incubator/Coworking Space'){
    return '#6f00ae';
  }
  else if (status == 'Startup'){
    return '#009900';
  }
  else if (status == 'Startup (1 - 10 Employees)'){
    return '#00ff00';
  }
  else if (status == 'Startup (11 - 50 Employees)'){
    return '#006600';
  }
  else if (status == 'Startup (50+ Employees)'){
    return '#004400';
  }
  else if (status == 'Venture Capital'){
    return '#fb6d14';
  }
  else{
    return '#fb6d14';
  }
}